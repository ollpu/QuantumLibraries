$wnd.jsme.runAsyncCallback8('var Y6="\\t",Z6="!a",$6=\'" fill="\',a7="M",b7="r";function c7(a){var b;b=a.K.c*d7(a.G);a.R=0.06*b;a.M=0.15*b;a.L=0.38*b;a.P=0.47*b;a.Q=ur(0.6*b*a.E+0.5);a.O=0.12*b;a.S=0.4*b;a.y=0.5*b+0.5}\nfunction e7(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new f7;g7(a.G,kq(a.G,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);h7(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;i7(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;i7(a,e);h7(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;i7(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;i7(a,e);h7(a,a.J)}\nfunction j7(a,b,c,d){if(g7(a.G,kq(a.G,c,d)))h7(a,-3),i7(a,b),h7(a,a.J);else if(a.r[c]!=a.r[d]){var e,f;e=new f7;f=new f7;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;k7(a,e)&&(h7(a,a.r[c]),i7(a,e));k7(a,f)&&(h7(a,a.r[d]),i7(a,f));h7(a,a.J)}else 0!=a.r[c]?(h7(a,a.r[c]),i7(a,b),h7(a,a.J)):i7(a,b)}\nfunction l7(a,b){var c;for(c=0;c<a.T.c;++c)a.w=m7(a.w,$n(a.T,c));var d,e,f,g,h;d=C(Qn,Pm,-1,a.G.o,2);for(c=0;c<a.G.p;++c)0!=(a.G.z[c]&131072)&&(d[D(a.G,0,c)]=!0,d[D(a.G,1,c)]=!0);f=new OK;for(c=0;c<a.G.o;++c)e=0!=(a.G.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=n7(a.K,mo(a.G,c)),h=o7(a.K,no(a.G,c)),aK(f,g-e,h-e,2*e,2*e),a.w=m7(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction p7(a,b){var c,d;if(0!=(a.B&128))return a.r[b];d=q7(a,b);if(-1==d){c=a.G;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=q7(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction q7(a,b){var c,d,e;d=e=-1;if(0!=(a.B&128))return-1;0!=(a.G.s[b]&134217728)&&(e=Lp(a.G,b),d=Mp(a.G,b));c=lp(a.G,b);-1!=c&&(e=~~(a.G.z[c]&3072)>>10,d=Np(a.G,c));-1!=e&&0!=e&&(e|=d<<8);return e}function r7(a,b){var c;if(0==Wn(a.G,b))return!1;for(c=0;c<Wn(a.G,b);++c)if(!g7(a.G,Tn(a.G,b,c)))return!1;return!0}function s7(a){var b;a.s=C(Qn,Pm,-1,a.G.o,2);for(b=0;b<a.G.p;++b)a.s[D(a.G,0,b)]=!0,a.s[D(a.G,1,b)]=!0}\nfunction t7(a,b,c,d,e){var f,g,h,j,l,n,q;n=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=uo(a.G,b,c);for(j=0;j<a.G.f[b];++j)g=Tn(a.G,b,j),h=q,D(a.G,0,g)==b?l=D(a.G,1,g):l=D(a.G,0,g),l!=c&&(g=uo(a.G,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(n=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.M*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(n=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.M*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return n}function u7(a,b,c,d){0==b?(0>c?d.a=a.M:d.a=-a.M,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.M*Math.sin(c)),d.b=a.M*Math.cos(c))}\nfunction v7(a,b,c,d){var e,f,g,h,j,l,n,q;e=new f7;h=new f7;l=new MK;j=new MK;f=D(a.G,0,c);g=D(a.G,1,c);d&&(n=b.a,b.a=b.b,b.b=n,n=b.c,b.c=b.d,b.d=n,n=f,f=g,g=n);if(k7(a,b))if(qo(a.G,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-w7(a,c):w7(a,c);0==d&&(d=1);u7(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,t7(a,f,g,1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,t7(a,f,g,-1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.G.B[c]&&\nx7(e,h);k7(a,e)&&j7(a,e,f,g);64==a.G.B[c]?k7(a,h)&&e7(a,h,f,g):k7(a,h)&&j7(a,h,f,g)}else{u7(a,b.b-b.a,b.d-b.c,l);n=l.a/2;q=l.b/2;d=!1;e.a=b.a+n;e.c=b.c+q;e.b=b.b+n;e.d=b.d+q;if(1<a.G.f[f])if(t7(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new y7(e.a,e.c);h.a=b.a-n;h.c=b.c-q;h.b=b.b-n;h.d=b.d-q;if(1<a.G.f[f])if(t7(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new y7(h.a,h.c),d=!0;26==a.G.B[c]&&x7(e,h);64==\na.G.B[c]?d?(e7(a,e,f,g),j7(a,h,f,g)):(j7(a,e,f,g),e7(a,h,f,g)):(j7(a,e,f,g),j7(a,h,f,g))}}\nfunction z7(a,b){var c,d,e,f,g,h,j,l,n,q,r,u;a.F||(r=o7(a.K,no(a.G,b)),r=\'<circle id="\'+(null!=a.k?a.k:Mj+A7)+":Atom:"+b+\'" class="event" cx="\'+ur(100*n7(a.K,mo(a.G,b)))/100+za+ur(100*r)/100+\'" r="8" fill-opacity="0"/>\',Up(a.b,r));h=null;0!=a.G.q[b]&&(r=1==ar(a.G.q[b])?m:m+ar(a.G.q[b]),h=0>a.G.q[b]?r+ac:r+Nb);g=null;r=a.G.w[b];0!=r&&(0!=(r&2)&&(g=hh),0!=(r&4)&&(g=null==g?Z6:g+",!a"),0!=(r&4096)&&(g=null==g?Tk:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?Qh:g+",c":8==e?g=null==g?b7:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+(~~(r&29360128)>>\n22):g+",rs"+(~~(r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.G.v[b]&&(g=null==g?m+a.G.v[b]:g+Ob+(m+a.G.v[b]));r=0;if(0!=(a.G.s[b]&48))switch(a.G.s[b]&48){case 16:h=null==h?Zl:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.B&64))if(0!=(a.G.s[b]&67108864))e=Kd;else if(0!=~~(a.G.s[b]&98304)>>15)if(2==a.G.f[b])switch(~~(a.G.s[b]&98304)>>15){case 2:e=0!=(a.G.s[b]&4)?pk:dg;break;case 1:e=0!=(a.G.s[b]&4)?vj:a7;break;default:e=Jb}else switch(~~(a.G.s[b]&98304)>>15){case 1:e=\n0!=(a.G.s[b]&4)?b7:gg;break;case 2:e=0!=(a.G.s[b]&4)?Tk:yg;break;default:e=Jb}0!=(a.B&1792)&&(e=null==e?m+(null==a.G.b.d?-1:a.G.b.d[b]):e+Ob+(m+(null==a.G.b.d?-1:a.G.b.d[b])));n=null;0!=(a.B&16)&&0!=ar(a.G.u[b])&&(n=m+ar(a.G.u[b]));l=null;a:{j=a.G;Pn(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<Wn(j,j.e[b][d]);++c){if(zq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(zq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=q7(a,\nb),-1!=j&&(l=0==j?ih:(1==(j&255)?zb:mk)+(1+(~~j>>8))));j=0;a.G.E?((6!=a.G.x[b]||!a.s[b])&&0!=(a.G.w[b]&2048)&&0!=a.G.q[b]||0!=(a.G.s[b]&48))&&(j=ap(a.G,b)):(6!=a.G.x[b]||!a.s[b]||0!=(a.G.s[b]&48))&&(j=ap(a.G,b));c=Hp(a.G,b);if(null!=c)j=0;else if(null!=wp(a.G,b)){d=0!=(a.G.w[b]&1)?"[!":Vg;c=a.G;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?m:Aq[c.x[b]];else{u=m;for(q=0;q<c.t[b].length;++q)0<q&&(u+=Ob),f=c.t[b][q],u+=Aq[f];c=u}c=d+c+eh;5<c.length&&(c=d+wp(a.G,b).length+eh);0!=(a.G.w[b]&2048)&&(j=-1)}else 0!=\n(a.G.w[b]&1)?(c=Kd,0!=(a.G.w[b]&2048)&&(j=-1)):(6!=a.G.x[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=Aq[a.G.x[b]]);d=0;!Kp(a.G,b)&0!=(a.G.w[b]&536870912)&&h7(a,-8);if(null!=c)d=B7(a,c),C7(a,n7(a.K,mo(a.G,b)),o7(a.K,no(a.G,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.G.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.G.j[b][c]){c=!1;break a}c=!0}c&&(c=n7(a.K,mo(a.G,b)),f=o7(a.K,no(a.G,b)),Up(a.T,new PK(c-a.O,f-a.O,2*a.O,2*a.O)),a.F||Up(a.N,new D7(c,f,r7(a,b)?-3:a.r[b])))}null!=h&&(E7(a,~~((2*a.Q+1)/3)),f=n7(a.K,mo(a.G,b))+\n((d+B7(a,h))/2+1),c=o7(a.K,no(a.G,b))-~~((4*a.o-4)/8),C7(a,f,c,h,!0),E7(a,a.Q));0!=(a.B&2)&&(g=m+b);null!=g&&(E7(a,~~((2*a.Q+1)/3)),f=n7(a.K,mo(a.G,b))-(d+B7(a,g))/2,c=o7(a.K,no(a.G,b))-~~((4*a.o-4)/8),C7(a,f,c,g,!0),E7(a,a.Q));null!=e&&(E7(a,~~((2*a.Q+1)/3)),f=n7(a.K,mo(a.G,b))-(d+B7(a,e))/2,c=o7(a.K,no(a.G,b))+~~((4*a.o+4)/8),q=a.z,h7(a,448),C7(a,f,c,e,!1),h7(a,q),E7(a,a.Q));null!=n&&(E7(a,~~((2*a.Q+1)/3)),f=n7(a.K,mo(a.G,b))+((d+B7(a,n))/2+1),c=o7(a.K,no(a.G,b))+~~((4*a.o+4)/8),q=a.z,h7(a,0>a.G.u[b]?\n384:448),C7(a,f,c,n,!0),h7(a,q),E7(a,a.Q));if(null!=l){var A,v;c=C(lo,Jm,-1,Wn(a.G,b),1);for(f=0;f<Wn(a.G,b);++f)c[f]=uo(a.G,b,Un(a.G,b,f));bp(c);q=F7(c,0);u=G7(c,0,q);for(f=1;f<c.length;++f)A=F7(c,f),v=G7(c,f,A),u<v&&(u=v,q=A);c=q;E7(a,~~((2*a.Q+1)/3));f=n7(a.K,mo(a.G,b))+0.7*a.o*Math.sin(c);c=o7(a.K,no(a.G,b))+0.7*a.o*Math.cos(c);q=a.z;h7(a,p7(a,b));C7(a,f,c,l,!1);h7(a,q);E7(a,a.Q)}if(!(0==j&&0==r)){l=C(lo,Jm,-1,4,1);for(c=0;c<Wn(a.G,b);++c){f=Tn(a.G,b,c);for(q=0;2>q;++q)D(a.G,q,f)==b&&(u=uo(a.G,\nD(a.G,q,f),D(a.G,1-q,f)),-1.5707963267948966>u?(l[0]-=u+1.5707963267948966,l[3]+=u+3.141592653589793):0>u?(l[2]+=u+1.5707963267948966,l[3]-=u):1.5707963267948966>u?(l[1]+=u,l[2]+=1.5707963267948966-u):(l[0]+=u-1.5707963267948966,l[1]+=3.141592653589793-u))}0==a.G.f[b]?pr(a.G.x[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=n)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=m;0!=j&&(f=B7(a,cf),n=0,-1==j?(e=Vj,E7(a,~~((2*a.Q+1)/3)),n=B7(a,e)):1<j&&(e=m+j,E7(a,~~((2*a.Q+1)/3)),n=B7(a,e)),0.6>l[1]||0.6>\nl[3]?(h=o7(a.K,no(a.G,b)),l[1]<=l[3]?(l[1]+=10,g=n7(a.K,mo(a.G,b))+(d+f)/2):(l[3]+=10,g=n7(a.K,mo(a.G,b))-(d+f)/2-n)):(g=n7(a.K,mo(a.G,b)),l[0]<l[2]?(l[0]+=10,h=o7(a.K,no(a.G,b))-a.o):(l[2]+=10,h=o7(a.K,no(a.G,b))+a.o)),0<n&&(c=h+~~((4*a.o+4)/8),C7(a,g+(f+n)/2,c,e,!0),E7(a,a.Q)),C7(a,g,h,cf,!0));e=0;if(0!=r){n=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<n?(e=c,n=l[c],g=l[h]):l[c]==n&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=n7(a.K,mo(a.G,b));h=o7(a.K,no(a.G,b))-a.O-d/2;break;case 1:g=n7(a.K,mo(a.G,b))+\na.O+d/2;h=o7(a.K,no(a.G,b));break;case 2:g=n7(a.K,mo(a.G,b));h=o7(a.K,no(a.G,b))+a.O+d/2;break;default:g=n7(a.K,mo(a.G,b))-a.O-d/2,h=o7(a.K,no(a.G,b))}if(1==r)Up(a.T,new PK(g-a.O,h-a.O,2*a.O,2*a.O)),a.F||Up(a.N,new D7(g,h,r7(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.O;e=0;g-=a.O;break;case 1:r=0;e=2*a.O;h-=a.O;break;default:r=0,e=2*a.O,h-=a.O}Up(a.T,new PK(g-a.O,h-a.O,2*a.O,2*a.O));a.F||Up(a.N,new D7(g,h,r7(a,b)?-3:a.r[b]));Up(a.T,new PK(g+r-a.O,h+e-a.O,2*a.O,2*a.O));a.F||Up(a.N,new D7(g+\nr,h+e,r7(a,b)?-3:a.r[b]))}}}-8==a.z&&h7(a,-9)}\nfunction H7(a,b){var c,d,e,f,g,h,j,l,n,q,r,u;n=new f7;c=new f7;f=new f7;j=new MK;h=new MK;d=D(a.G,0,b);e=D(a.G,1,b);var A=o7(a.K,no(a.G,d)),v=n7(a.K,mo(a.G,e)),t=o7(a.K,no(a.G,e)),A=\'<line id="\'+(null!=a.k?a.k:Mj+A7)+":Bond:"+d+ac+e+\'" class="event" x1="\'+ur(100*n7(a.K,mo(a.G,d)))/100+Ka+ur(100*A)/100+Ja+ur(100*v)/100+Qa+ur(100*t)/100+\'" stroke-width="8" stroke-opacity="0"/>\';Up(a.c,A);!Kp(a.G,d)&&!Kp(a.G,e)&&0!=((a.G.w[d]|a.G.w[e])&536870912)&&h7(a,-8);a.q[d]?(n.a=a.q[d].a,n.c=a.q[d].b):(n.a=n7(a.K,\nmo(a.G,d)),n.c=o7(a.K,no(a.G,d)));a.q[e]?(n.b=a.q[e].a,n.d=a.q[e].b):(n.b=n7(a.K,mo(a.G,e)),n.d=o7(a.K,no(a.G,e)));if(0!=(a.G.A[b]&16320))k7(a,n)&&(g=m+ur(100*n.a)/100,l=m+ur(100*n.b)/100,q=m+ur(100*n.c)/100,r=m+ur(100*n.d)/100,u=\'<line stroke-dasharray="3, 3" x1="\'+g+Ka+q+Ja+l+Qa+r+Ea+a.e+\'" stroke-width:\'+ur(100*a.n)/100+Sa,I7(a,u)),h7(a,-9);else{g=64==a.G.B[b]?0:32==a.G.B[b]?1:Xn(a.G,b);switch(g){case 1:switch(a.G.B[b]){case 1:k7(a,n)&&j7(a,n,d,e);break;case 17:J7(a,n,d,e);break;case 9:h=n.b-n.a;\nj=n.d-n.c;g7(a.G,kq(a.G,d,e))?f=e=-3:(e=a.r[d],f=p7(a,d),e==(a.G.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=n.a+d*h/17-d*j/128,c.c=n.c+d*j/17+d*h/128,c.b=n.a+d*h/17+d*j/128,c.d=n.c+d*j/17-d*h/128,k7(a,c)&&(h7(a,9>d?e:f),i7(a,c),h7(a,a.J));break;case 32:if(k7(a,n)){f=n.b-n.a;j=n.d-n.c;c=Math.sqrt(f*f+j*j);c=2*H(I(K(c/(4*a.R))));f/=c-1;j/=c-1;g7(a.G,kq(a.G,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=n.a-a.R/2;n=n.c-a.R/2;h7(a,d);for(d=0;d<~~(c/2);++d)K7(a,h,n,a.R),h+=f,n+=j;h7(a,e);for(d=0;d<~~(c/2);++d)K7(a,h,\nn,a.R),h+=f,n+=j;h7(a,a.J)}}break;case 0:case 2:if((a.t[d]||2==a.G.k[d])&&(a.t[e]||2==a.G.k[e])&&!qo(a.G,b)&&2==g){if(!k7(a,n))break;u7(a,n.b-n.a,n.d-n.c,j);h=j.a/2;j=j.b/2;c.a=n.a+h;c.c=n.c+j;c.b=n.b+h;c.d=n.d+j;f.a=n.a-h;f.c=n.c-j;f.b=n.b-h;f.d=n.d-j;26==a.G.B[b]&&x7(c,f);j7(a,c,d,e);j7(a,f,d,e)}else if((a.t[e]||2==a.G.k[e])&&2==g)v7(a,n,b,!1);else if((a.t[d]||2==a.G.k[d])&&2==g)v7(a,n,b,!0);else{l=w7(a,b);0==l&&(l=1);c.a=n.a;c.c=n.c;c.b=n.b;c.d=n.d;u7(a,n.b-n.a,n.d-n.c,j);if(0<l){f.a=n.a+j.a;f.c=\nn.c+j.b;f.b=n.b+j.a;f.d=n.d+j.b;if(t7(a,d,e,1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(t7(a,e,d,-1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=n.a-j.a;f.c=n.c-j.b;f.b=n.b-j.a;f.d=n.d-j.b;if(t7(a,d,e,-1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(t7(a,e,d,1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.G.B[b]&&x7(c,f);k7(a,c)&&j7(a,c,d,e);2==g?k7(a,f)&&j7(a,f,d,e):k7(a,f)&&e7(a,f,d,e)}break;case 3:k7(a,n)&&(j7(a,n,d,e),u7(a,n.b-n.a,n.d-n.c,j),c.a=n.a+j.a,c.c=n.c+j.b,c.b=n.b+j.a,c.d=n.d+j.b,\nj7(a,c,d,e),c.a=n.a-j.a,c.c=n.c-j.b,c.b=n.b-j.a,c.d=n.d-j.b,j7(a,c,d,e))}-8==a.z&&h7(a,-9)}}function C7(a,b,c,d,e){var f;e&&(e=B7(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Nb||d==ac)&&(f=2*f/3),Up(a.T,new PK(b-e,c-f,2*e,2*f)));a.F||L7(a,d,b,c)}function M7(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction G7(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function N7(a){var b;b=new OK;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function F7(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction J7(a,b,c,d){var e,f,g;g=new f7;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=N7(g);for(b=0;b<a.T.c;++b)if(e=$n(a.T,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(O7(a,g.a,g.c,b)){if(O7(a,g.b,g.d,b))return;P7(a,g,0,b);J7(a,g,c,d);return}if(O7(a,g.b,g.d,b)){P7(a,g,1,b);J7(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(lo,Jm,-1,3,1);e=C(lo,Jm,-1,3,1);f=C(lo,Jm,-1,4,1);h=C(lo,Jm,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];g7(a.G,kq(a.G,c,d))?g=d=-3:(d=a.r[c],g=p7(a,c),d==(a.G.s[c]&448)&&(d=g));h7(a,d);a.yd(b,e,3);h7(a,g);a.yd(f,h,4);h7(a,a.J)}}function O7(a,b,c,d){if(0!=(a.B&1))return!1;a=$n(a.T,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function x7(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction w7(a,b){var c,d,e,f,g,h,j,l,n,q;j=C(Qn,Pm,-1,16,2);l=C(Qn,Pm,-1,16,2);c=C(lo,Jm,-1,16,1);f=C(lo,Jm,-1,2,1);for(h=d=0;2>h;++h){e=D(a.G,h,b);for(n=0;n<a.G.f[e];++n)if(g=Tn(a.G,e,n),g!=b){if(4==d)return 0;j[d]=ko(a.G,g);l[d]=qo(a.G,g);c[d++]=uo(a.G,e,Un(a.G,e,n))}}f[0]=uo(a.G,D(a.G,0,b),D(a.G,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction k7(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.T.c;++d)if(e=$n(a.T,d),ZJ(e,b.a,b.c))return!1;return!0}f=N7(b);c=!1;b.a>b.b&&(M7(b),c=!0);for(d=0;d<a.T.c;++d)if(e=$n(a.T,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(O7(a,b.a,b.c,d)){if(O7(a,b.b,b.d,d))return c&&M7(b),!1;P7(a,b,0,d);d=k7(a,b);c&&M7(b);return d}if(O7(a,b.b,b.d,d))return P7(a,b,1,d),d=k7(a,b),c&&M7(b),d}c&&M7(b);return!0}\nfunction P7(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=$n(a.T,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction Q7(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+b.b-c;break}case 0:a.x.a=a.w.d+a.w.c/2;a.x.b=a.w.e+a.w.b+c;b&&a.x.b>b.e+b.b-c&&(a.x.b=b.e+b.b-c);break;case 524288:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+c;break}case 262144:a.x.a=a.w.d+a.w.c/2,a.x.b=a.w.e-c,b&&a.x.b<b.e+c&&(a.x.b=b.e+c)}}\nfunction h7(a,b){if(!a.F&&(-10==b&&(a.z=-999,b=a.J),!(b==a.z||-8==a.z&&-9!=b)))switch(-8==b&&(a.I=a.z),-9==b&&(b=a.I),a.z=b,b){case 0:a.zd((UI(),bJ));break;case -6:a.zd(a.A);break;case -4:a.zd(a.H);break;case -2:a.zd(a.u);break;case -3:a.zd(a.v);break;case -7:a.zd(a.C);break;case -8:a.zd(a.D);break;case 64:a.zd(Hn);break;case 128:a.zd(In);break;case 256:a.zd(Kn);break;case 192:a.zd(Jn);break;case 320:a.zd(Ln);break;case 384:a.zd(Mn);break;case 448:a.zd(Nn);break;case 1:a.zd((UI(),ZI));break;default:a.zd((UI(),\nbJ))}}function R7(a){var b,c,d,e,f;e=n7(a.K,a.G.D[0].a);c=n7(a.K,a.G.D[0].a);f=o7(a.K,a.G.D[0].b);d=o7(a.K,a.G.D[0].b);for(b=0;b<a.G.o;++b)e>n7(a.K,mo(a.G,b))&&(e=n7(a.K,mo(a.G,b))),c<n7(a.K,mo(a.G,b))&&(c=n7(a.K,mo(a.G,b))),f>o7(a.K,no(a.G,b))&&(f=o7(a.K,no(a.G,b))),d<o7(a.K,no(a.G,b))&&(d=o7(a.K,no(a.G,b)));a.w=new PK(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.x=null;_.y=0;_.z=0;_.A=null;_.B=0;_.C=null;_.D=null;_.E=0;_.F=!1;_.G=null;_.H=null;_.I=0;_.J=0;_.K=null;\n_.L=0;_.M=0;_.N=null;_.O=0;_.P=0;_.Q=0;_.R=0;_.S=0;_.T=null;function D7(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},D7);_.a=0;_.b=0;_.c=0;function f7(){}x(5,1,{},f7);_.a=0;_.b=0;_.c=0;_.d=0;function S7(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function T7(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function n7(a,b){return b*a.c+a.a}function o7(a,b){return b*a.c+a.b}function U7(){this.b=this.a=0;this.c=1}\nfunction V7(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},U7,V7);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Ob+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function d7(a){return Nq(a,a.o,a.p,24)}function g7(a,b){return 0!=(a.z[b]&262144)}\nfunction i7(a,b){var c,d,e,f;c=m+ur(100*b.a)/100;d=m+ur(100*b.b)/100;e=m+ur(100*b.c)/100;f=m+ur(100*b.d)/100;c=Dd+c+Ka+e+Ja+d+Qa+f+\'" style="stroke:\'+a.e+";stroke-width:"+ur(100*a.n)/100+Sa;I7(a,c)}function L7(a,b,c,d){B7(a,b);b=Hd+ur(100*c)/100+\'" text-anchor="middle" y="\'+ur(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+$6+a.e+Wa+b+Cd;I7(a,b)}function K7(a,b,c,d){b=\'<circle cx="\'+ur(100*b)/100+za+ur(100*c)/100+\'" r="\'+ur(100*d)/100+$6+a.e+\'" />\';I7(a,b)}\nfunction B7(a,b){var c;c=VR();if(-1<c&&9>c)return!a.i&&(a.i=(SH(),new TH(a.f))),c=kK(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=W7;e||(W7=e=$doc.createElement("canvas"));d=m+d.b+Bk+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new PK(0,0,c.width,0)).c}function E7(a,b){a.o!=b&&(a.o=b,a.f=new HJ(ef,0,b))}\nfunction X7(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:Mj+A7)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Dd(ba)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ba+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:Mj+A7)+" {pointer-events:none; }  #"+(null!=a.k?a.k:Mj+A7)+" .event  { pointer-events:all;}  <\/style>\\n";d+=Y6;d+=b;for(c=new Zp(a.c);c.b<c.d.ug();)b=$p(c),I7(a,b);for(c=new Zp(a.b);c.b<c.d.ug();)b=$p(c),I7(a,b);return d+a.Cd(Y6)+a.d.a.a+zd}\nfunction I7(a,b){Er(a.d,Y6);Er(a.d,b);Er(a.d,aa)}x(28,3,{});_.Cd=Fx;_.Dd=Fx;_.yd=function(a,b,c){var d,e;e=new $B(\'<polygon points="\');for(d=0;d<c;++d){var f=m+ur(100*a[d])/100;bw(e.a,f);e.a.a+=Ob;f=m+ur(100*b[d])/100;bw(e.a,f);e.a.a+=ba}bw(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');I7(this,e.a.a)};_.zd=function(a){this.e=Kk+(~~a.d>>16&255)+Ob+(~~a.d>>8&255)+Ob+(a.d&255)+Ib};_.tS=function(){return X7(this)};_.e=Ah;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var A7=0;\nfunction Y7(a){var b;Pn(a,15);b=a.C&65535;switch(a.C&-65536){case 65536:return null;case 131072:return 1==b?"meso":m+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":m+b+" stereo isomers"}}function Z7(){Z7=y;$7=z(pJ,Lm,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction a8(a,b){Z7();var c,d,e,f,g,h;c=!b?1:($7[0]*(~~b.d>>16&255)+$7[1]*(~~b.d>>8&255)+$7[2]*(b.d&255))/255;f=!a?1:($7[0]*(~~a.d>>16&255)+$7[1]*(~~a.d>>8&255)+$7[2]*(a.d&255))/255;e=wq(c-f);if(0.30000001192092896<e)return a;d=C(pJ,Lm,-1,3,1);b8(~~b.d>>16&255,~~b.d>>8&255,b.d&255,d);g=C(pJ,Lm,-1,3,1);b8(~~a.d>>16&255,~~a.d>>8&255,a.d&255,g);h=wq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=wq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;\nelse if(e=(f>c?1<f+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(pJ,Lm,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(~~a.d>>24&255)/255,f=c,null==f&&(f=C(pJ,Lm,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(~~a.d>>8&255)/255,f[0]=(~~a.d>>16&255)/255),f=!a?1:($7[0]*(~~a.d>>16&255)+$7[1]*(~~a.d>>8&255)+$7[2]*(a.d&255))/255,0==f)c=new oJ(f,f,f,c[3]);else{d=e/(!a?1:($7[0]*(~~a.d>>16&255)+$7[1]*(~~a.d>>8&255)+$7[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=$7[e]:(h+=(c[e]-1)*\n$7[e],c[e]=1);if(0!=h){for(e=d=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*$7[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/$7[e],1<c[e]&&(c[e]=1))}c=new oJ(c[0],c[1],c[2],c[3])}return c}var $7;function c8(a){UI();this.d=a|-16777216}\nfunction b8(a,b,c,d){UI();var e,f,g,h,j,l;null==d&&(d=C(pJ,Lm,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(491,1,{59:1,68:1,72:1},c8);var W7=null;function y7(a,b){this.a=a;this.b=b}x(543,514,{81:1,82:1},y7);function m7(a,b){var c;c=new OK;$J(a,b,c);return c}x(717,618,kn);\n_.$d=function(){var a,b,c;b=qA(this.a,!1,!0);c=null;a=new js;if(Rr(new gs,a,new XK(new bL(b)))){a=new d8(a,b);b=new PK(0,0,400,300);var d;if(0!=a.G.o){a.p=ur(b.c);a.j=ur(b.b);0==a.G.o?c=null:(R7(a),c=a.K.c*d7(a.G),d=new V7(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(S7(d,a.K),T7(d,a.w)),Q7(a,b,c,131072),c=d);Pn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);s7(a);a.N.Xg();a.T.Xg();c7(a);E7(a,a.Q);a.F=!0;for(d=0;d<a.G.o;++d)z7(a,d);a.F=!1;d=a.K.c*d7(a.G);l7(a,d);Q7(a,b,d,131072);var e;if(e=b){var f=\na.w;e=f.d;var g=f.e,h=f.c,f=f.b,j,l,n,q;b.jg()||0>=h||0>=f?e=!1:(j=b.d,n=b.e,l=j+b.c,q=n+b.b,e=j<=e&&e+h<=l&&n<=g&&g+f<=q);e=!e}e&&(b=new V7(a.w,b,d),S7(b,a.K),T7(b,a.w),d=a.x,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&S7(b,c))}if(0!=a.G.o){Pn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);c7(a);b=!1;a.r=C(B,w,-1,a.G.o,1);for(c=0;c<a.G.o;++c)a.r[c]=a.G.s[c]&448,0!=a.r[c]&&(b=!0),Kp(a.G,c)&&(a.r[c]=128),0!=(a.G.s[c]&131072)&&0==(a.B&4096)&&(a.r[c]=256);h7(a,-10);if(a.G.E){d=a.P;h7(a,-7);for(c=0;c<\na.G.c;++c)0!=(a.G.w[c]&536870912)&&K7(a,n7(a.K,mo(a.G,c))-d,o7(a.K,no(a.G,c))-d,2*d);a.n=2*a.P;g=new f7;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.w[c]&a.G.w[d]&536870912)&&(g.a=n7(a.K,mo(a.G,c)),g.c=o7(a.K,no(a.G,c)),g.b=n7(a.K,mo(a.G,d)),g.d=o7(a.K,no(a.G,d)),i7(a,g))}a.n=2*a.L;g=new f7;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.z[e]&131072)&&(g.a=n7(a.K,mo(a.G,c)),g.c=o7(a.K,no(a.G,c)),g.b=n7(a.K,mo(a.G,d)),g.d=o7(a.K,no(a.G,d)),h7(a,-2),i7(a,g));if(a.G.E){h7(a,320);if(0!=\n(a.B&8))for(c=0;c<a.G.c;++c)0!=(a.G.w[c]&-536870913)&&K7(a,n7(a.K,mo(a.G,c))-a.S/2,o7(a.K,no(a.G,c))-a.S/2,a.S);for(e=0;e<a.G.d;++e)0!=a.G.A[e]&&(c=D(a.G,0,e),d=D(a.G,1,e),K7(a,(n7(a.K,mo(a.G,c))+n7(a.K,mo(a.G,d))-a.S)/2,(o7(a.K,no(a.G,c))+o7(a.K,no(a.G,d))-a.S)/2,a.S))}0==(a.B&32)&&(d=Y7(a.G),null!=d&&(0==a.x.a&&0==a.x.b&&(c=a.K.c*d7(a.G),R7(a),l7(a,c),Q7(a,null,c,0)),E7(a,ur(a.y)),h7(a,448),L7(a,d,a.x.a,a.x.b+0.30000001192092896*a.y)));E7(a,a.Q);a.n=a.R;h7(a,a.J);s7(a);a.N.Xg();a.T.Xg();for(c=0;c<\na.G.o;++c)r7(a,c)?(h7(a,-3),z7(a,c),h7(a,a.J)):0!=a.r[c]?(h7(a,a.r[c]),z7(a,c),h7(a,a.J)):!b&&1!=a.G.x[c]&&6!=a.G.x[c]&&0==(a.B&2048)&&null==wp(a.G,c)&&a.G.x[c]<Bn.length?(d=a,e=Bn[a.G.x[c]],h=g=void 0,g=(UI(),VI),h=new c8(e),e=a8(h,g),d.z=-5,d.e=Kk+(~~e.d>>16&255)+Ob+(~~e.d>>8&255)+Ob+(e.d&255)+Ib,z7(a,c),h7(a,a.J)):z7(a,c);for(c=new Zp(a.N);c.b<c.d.ug();)b=$p(c),h7(a,b.a),K7(a,b.b-a.O/2,b.c-a.O/2,a.O);h7(a,a.J);c=!1;for(b=0;b<a.G.d;++b)d=null,0!=(a.G.A[b]&16320)?(e=~~(a.G.A[b]&960)>>6,d=(~~(a.G.A[b]&\n960)>>6)+(~~(a.G.A[b]&15360)>>10),d=e==d?Vg+e+eh:Vg+e+ld+d+eh):0!=(a.G.A[b]&786432)?d=262144==(a.G.A[b]&786432)?hh:32==(a.G.A[b]&48)?"r!a":Z6:0!=(a.G.A[b]&48)&&(d=32==(a.G.A[b]&48)?b7:"!r"),e=~~(a.G.A[b]&114688)>>14,0!=e&&(d=(null==d?m:d)+e),null!=d&&(f=D(a.G,0,b),j=D(a.G,1,b),c||(E7(a,~~((2*a.Q+1)/3)),c=!0),g=(n7(a.K,mo(a.G,f))+n7(a.K,mo(a.G,j)))/2,h=(o7(a.K,no(a.G,f))+o7(a.K,no(a.G,j)))/2,e=n7(a.K,mo(a.G,j))-n7(a.K,mo(a.G,f)),j=o7(a.K,no(a.G,j))-o7(a.K,no(a.G,f)),f=Math.sqrt(e*e+j*j),n=0.6*B7(a,\nd),l=0.55*a.o,0!=f&&(0<e?C7(a,g+n*j/f,h-l*e/f,d,!0):C7(a,g-n*j/f,h+l*e/f,d,!0)));c&&E7(a,a.Q);a.q=C(e8,o,82,a.G.o,0);for(b=0;b<a.G.p;++b)(2==a.G.B[b]||26==a.G.B[b]||64==a.G.B[b])&&H7(a,b);for(b=0;b<a.G.p;++b)2!=a.G.B[b]&&26!=a.G.B[b]&&64!=a.G.B[b]&&H7(a,b);if(0==(a.B&64))for(b=0;b<a.G.p;++b)if(0!=~~(a.G.z[b]&48)>>4){switch(~~(a.G.z[b]&48)>>4){case 1:h=2==Xn(a.G,b)?Ue:0!=(a.G.z[b]&4)?pk:dg;break;case 2:h=2==Xn(a.G,b)?"Z":0!=(a.G.z[b]&4)?vj:a7;break;default:h=Kd}E7(a,~~((2*a.Q+1)/3));h7(a,g7(a.G,b)?\n-3:448);e=D(a.G,0,b);g=D(a.G,1,b);c=(n7(a.K,mo(a.G,e))+n7(a.K,mo(a.G,g)))/2;d=(o7(a.K,no(a.G,e))+o7(a.K,no(a.G,g)))/2;f=(n7(a.K,mo(a.G,e))-n7(a.K,mo(a.G,g)))/3;e=(o7(a.K,no(a.G,e))-o7(a.K,no(a.G,g)))/3;C7(a,c+e,d-f,h,!0);h7(a,a.J);E7(a,a.Q)}if(0!=(a.B&4)){E7(a,~~((2*a.Q+1)/3));h7(a,384);for(b=0;b<a.G.p;++b)e=D(a.G,0,b),g=D(a.G,1,b),h=0!=(a.G.z[b]&512)?"d":ko(a.G,b)?hh:m,c=(n7(a.K,mo(a.G,e))+n7(a.K,mo(a.G,g)))/2,d=(o7(a.K,no(a.G,e))+o7(a.K,no(a.G,g)))/2,C7(a,c,d,h+m+b,!0);h7(a,a.J);E7(a,a.Q)}}c=X7(a)}QM(c)};\nfunction d8(a,b){var c;An();this.w=new OK;this.G=a;this.B=0;this.E=1;this.K=new U7;this.T=new Qp;this.N=new Qp;this.t=C(Qn,Pm,-1,this.G.o,2);this.x=new MK;this.J=0;this.z=-1;c=(UI(),VI);var d=En;Z7();this.u=new Dn(ur((~~c.d>>16&255)+0.30000001192092896*((~~d.d>>16&255)-(~~c.d>>16&255))),ur((~~c.d>>8&255)+0.30000001192092896*((~~d.d>>8&255)-(~~c.d>>8&255))),ur((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=a8(Cn,c);this.C=Gn;this.D=Fn;this.c=new Qp;this.b=new Qp;this.d=new aw;this.f=\nnew HJ(ef,0,12);new HJ(ef,0,120);this.k=m;++A7;this.a=b}x(746,28,{},d8);_.Cd=function(a){var b;b=m;null!=this.a&&0<this.a.length&&(b=YR(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",ch),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Dd=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Z(3);Z(28);Z(746);var e8=vT(976,NK);Z(4);Z(5);Z(19);R(AZ)(8);function Fx(){return m};\n//@ sourceURL=8.js\n')