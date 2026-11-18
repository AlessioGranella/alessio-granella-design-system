"""Corrispondenze Pantone (ΔE2000) per la palette. Uso: python3 -I scripts/pantone.py <cartella color-books> <out.json>"""
import json, math, sys
D=sys.argv[1]
cols={"Paper":"f0efee","Soft":"dfdad5","Linea":"c8c6c2","Ink":"1a2b1e","Verde":"243728","Rust":"d14124","Muschio":"8faf90","Blu-nero":"0f1821"}
books={"Solid Coated":"PANTONE+ Solid Coated-V3.json","Solid Uncoated":"PANTONE+ Solid Uncoated-V3.json","Color Bridge Coated":"PANTONE+ Color Bridge Coated-V3.json","Color Bridge Uncoated":"PANTONE+ Color Bridge Uncoated-V3.json"}
def lin(c):
    c/=255; return c/12.92 if c<=0.04045 else ((c+0.055)/1.055)**2.4
def hex2lab(h):
    r,g,b=[lin(int(h[i:i+2],16)) for i in (0,2,4)]
    # sRGB -> XYZ D50 (Bradford-adapted)
    X=0.4360747*r+0.3850649*g+0.1430804*b
    Y=0.2225045*r+0.7168786*g+0.0606169*b
    Z=0.0139322*r+0.0971045*g+0.7141733*b
    Xn,Yn,Zn=0.96422,1.0,0.82521
    f=lambda t: t**(1/3) if t>216/24389 else (24389/27*t+16)/116
    fx,fy,fz=f(X/Xn),f(Y/Yn),f(Z/Zn)
    return 116*fy-16,500*(fx-fy),200*(fy-fz)
def de2000(a,b):
    L1,a1,b1=a;L2,a2,b2=b
    C1=math.hypot(a1,b1);C2=math.hypot(a2,b2);Cb=(C1+C2)/2
    G=0.5*(1-math.sqrt(Cb**7/(Cb**7+25**7)))
    a1p,a2p=a1*(1+G),a2*(1+G)
    C1p,C2p=math.hypot(a1p,b1),math.hypot(a2p,b2)
    h1=math.degrees(math.atan2(b1,a1p))%360;h2=math.degrees(math.atan2(b2,a2p))%360
    dL=L2-L1;dC=C2p-C1p
    dh=h2-h1
    if C1p*C2p==0: dh=0
    elif dh>180: dh-=360
    elif dh<-180: dh+=360
    dH=2*math.sqrt(C1p*C2p)*math.sin(math.radians(dh/2))
    Lb=(L1+L2)/2;Cbp=(C1p+C2p)/2
    if C1p*C2p==0: hb=h1+h2
    elif abs(h1-h2)<=180: hb=(h1+h2)/2
    else: hb=(h1+h2+360)/2 if h1+h2<360 else (h1+h2-360)/2
    T=1-0.17*math.cos(math.radians(hb-30))+0.24*math.cos(math.radians(2*hb))+0.32*math.cos(math.radians(3*hb+6))-0.2*math.cos(math.radians(4*hb-63))
    SL=1+0.015*(Lb-50)**2/math.sqrt(20+(Lb-50)**2);SC=1+0.045*Cbp;SH=1+0.015*Cbp*T
    RT=-2*math.sqrt(Cbp**7/(Cbp**7+25**7))*math.sin(math.radians(60*math.exp(-((hb-275)/25)**2)))
    return math.sqrt((dL/SL)**2+(dC/SC)**2+(dH/SH)**2+RT*(dC/SC)*(dH/SH))
def lab2hex(l):
    L,a,b=l;fy=(L+16)/116;fx=fy+a/500;fz=fy-b/200
    fi=lambda t: t**3 if t**3>216/24389 else (116*t-16)/(24389/27)
    X,Y,Z=fi(fx)*0.96422,fi(fy),fi(fz)*0.82521
    r= 3.1338561*X-1.6168667*Y-0.4906146*Z
    g=-0.9787684*X+1.9161415*Y+0.0334540*Z
    b_= 0.0719453*X-0.2289914*Y+1.4052427*Z
    def g_(c):
        c=max(0,min(1,c)); return round(255*(12.92*c if c<=0.0031308 else 1.055*c**(1/2.4)-0.055))
    return "#%02x%02x%02x"%(g_(r),g_(g),g_(b_))
data={k:json.load(open(f"{D}/{v}"))["records"] for k,v in books.items()}
out={}
for n,h in cols.items():
    lab=hex2lab(h);out[n]={"hex":"#"+h}
    print(f"\n{n} #{h}  Lab {lab[0]:.1f} {lab[1]:.1f} {lab[2]:.1f}")
    for bk,recs in data.items():
        rs=sorted(((de2000(lab,r["components"]),r["name"].replace("PANTONE ",""),lab2hex(r["components"])) for r in recs.values()),key=lambda x:x[0])[:3]
        out[n][bk]=[{"code":c,"de":round(d,1),"hex":x} for d,c,x in rs]
        print(f"  {bk:22s} "+" | ".join(f"{c} ΔE{d:.1f}" for d,c,x in rs))
json.dump(out,open(sys.argv[2],"w"),indent=1,ensure_ascii=False)
