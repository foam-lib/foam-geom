const temp0 = [0,0];

/*--------------------------------------------------------------------------------------------------------------------*/
// CREATE
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Creates a empty rectangle-
 * @returns {number[]}
 */
export function create(){
    return [0,0,0,0];
}

/**
 * Creates a rectangle.
 * @param x
 * @param y
 * @param w
 * @param h
 * @returns {*[]}
 */
export function create4(x, y, w, h){
    return [x,y,w,h];
}

/**
 * Creates a rectangle.
 * @param p
 * @param s
 * @returns {*[]}
 */
export function create2v(p,s){
    return [p[0],p[1],s[0],s[1]];
}

/**
 * Creates a rectangle with a specific size.
 * @param size
 */
export function createFromSize(size){
    return createFromSize2(size[0],size[1]);
}

/**
 * Creates a rectangle with a specific size.
 * @param width
 * @param height
 * @returns {*[]}
 */
export function createFromSize2(width,height){
    return [0,0,width,height];
}

/**
 * Creates a rectangle with a specific size.
 * @param size
 * @returns {*[]}
 */
export function createFromSize1(size){
    return [0,0,size,size];
}

/**
 * Creates a rectangle with a specific origin.
 * @param pos
 */
export function createFromOrigin(pos){
    return createFromOrigin2(pos[0],pos[1]);
}

/**
 * Creates a rectangle with specifoc origin.
 * @param x
 * @param y
 * @returns {number[]}
 */
export function createFromOrigin2(x,y){
    return [x,y,0,0];
}

/*--------------------------------------------------------------------------------------------------------------------*/
// COPY / SET
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Returns a copy of the rectangle.
 * @param rect
 * @returns {number[]}
 */
export function copy(rect){
    return rect.slice(0);
}

/**
 * Sets a rectangle from another rectangle.
 * @param recta
 * @param rectb
 * @returns {*}
 */
export function set(recta,rectb){
    recta[0] = rectb[0];
    recta[1] = rectb[1];
    recta[2] = rectb[2];
    recta[3] = rectb[3];
    return recta;
}

/**
 * Sets a rectangle from position and size.
 * @param rect
 * @param p
 * @param s
 */
export function set2v(rect,p,s){
    return set4(rect,p[0],p[1],s[0],s[1]);
}

/**
 * Sets a rectangle from position and size.
 * @param rect
 * @param x
 * @param y
 * @param w
 * @param h
 * @returns {*}
 */
export function set4(rect,x,y,w,h){
    rect[0] = x;
    rect[1] = y;
    rect[2] = w;
    rect[3] = h;
    return rect;
}


/*--------------------------------------------------------------------------------------------------------------------*/
// ORIGIN
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Sets the origin of the rectangle.
 * @param rect
 * @param origin
 */
export function setOrigin(rect,origin){
    return setOrigin2(rect,origin[0],origin[1]);
}

/**
 * Sets the origin of the rectangle.
 * @param rect
 * @param ox
 * @param oy
 * @returns {*}
 */
export function setOrigin2(rect,ox,oy){
    rect[0] = ox;
    rect[1] = oy;
    return rect;
}

/**
 * Returns the origin of the rectangle.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getOrigin(rect,out){
    out = out || [0,0];
    out[0] = rect[0];
    out[1] = rect[1];
    return out;
}

/**
 * Offsets the rectangle by its center.
 * @param rect
 * @returns {*}
 */
export function setCenterToOrigin(rect){
    return setOrigin2(rect,rect[0] - rect[2] * 0.5, rect[1] - rect[3] * 0.5);
}

/**
 * Centers the rectangle to another rectangle.
 * @param recta
 * @param rectb
 * @returns {*}
 */
export function setCenterToRect(recta,rectb){
    return setCenterToOrigin(setOrigin(recta,getCenter(rectb,temp0)));
}

/**
 * Offsets the rectangle origin.
 * @param rect
 * @param dxy
 */
export function offset(rect,dxy){
    return offset2(rect,dxy[0],dxy[0]);
}

/**
 * Offsets the rectangle origin.
 * @param rect
 * @param d
 */
export function offset1(rect,d){
    return offset2(rect,d,d);
}

/**
 * Offsets the rectangle origin.
 * @param rect
 * @param dx
 * @param dy
 * @returns {*}
 */
export function offset2(rect,dx,dy){
    rect[0] += dx;
    rect[1] += dy;
    return rect;
}

/**
 * Returns an offsetted copy of the rectangle.
 * @param rect
 * @param dxy
 */
export function offseted(rect,dxy){
    return offset(copy(rect),dxy);
}

/**
 * Returns an offsetted copy of the rectangle.
 * @param rect
 * @param d
 */
export function offseted1(rect,d){
    return offset1(copy(rect),d);
}

/**
 * Returns an offsetted copy of the rectangle.
 * @param rect
 * @param dx
 * @param dy
 * @returns {*}
 */
export function offsetted2(rect,dx,dy){
    return offset2(copy(rect),dx,dy);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// SIZE
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Sets the size of a rectangle.
 * @param rect
 * @param v
 */
export function setSize(rect,v){
    return setSize2(rect,v[0],v[1]);
}

/**
 * Sets the size of a rectangle.
 * @param rect
 * @param w
 * @param h
 * @returns {*}
 */
export function setSize2(rect,w,h){
    rect[2] = w;
    rect[3] = h;
    return rect;
}

/**
 * Sets the size of a rectangle.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getSize(rect,out){
    out = out || [0,0];
    out[0] = rect[2];
    out[1] = rect[3];
    return out;
}

/**
 * Sets the rectangle size to positive values.
 * @param rect
 * @returns {*}
 */
export function abs(rect){
    rect[2] = Math.abs(rect[2]);
    rect[3] = Math.abs(rect[3]);
    return rect;
}

/**
 * Returns the apsect-ratio of the rectangle.
 * @param rect
 * @returns {number}
 */
export function getAspectRatio(rect){
    return rect[2] / rect[3];
}

/*--------------------------------------------------------------------------------------------------------------------*/
// CONVERT
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Normalizes the rectangle.
 * @param rect
 * @returns {*}
 */
export function normalize(rect){
    const max = Math.max(rect[2],rect[3]);
    rect[0] = rect[1] = 0;
    rect[2] /= max;
    rect[3] /= max;
    return rect;
}

/**
 * Returns a normalized copy of the rectangle.
 * @param rect
 * @param out
 * @returns {*}
 */
export function normalized(rect,out){
    return normalize(set(out || create(),rect));
}

/**
 * Floors a rectangles origin and size.
 * @param rect
 * @returns {*}
 */
export function floor(rect){
    rect[0] = Math.floor(rect[0]);
    rect[1] = Math.floor(rect[1]);
    rect[2] = Math.floor(rect[2]);
    rect[3] = Math.floor(rect[3]);
    return rect;
}

/**
 * Returns a floored copy of the rectangle.
 * @param rect
 * @returns {*}
 */
export function floored(rect){
    return floor(copy(rect));
}

/*--------------------------------------------------------------------------------------------------------------------*/
// CONSTRAIN
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Clamps a rectangle within another rectangle.
 * @param recta
 * @param rectb
 */
export function clamp(recta,rectb){
    return clamp4(recta,rectb[0],rectb[1],rectb[2],rectb[3]);
}

/**
 * Clamps a rectangle within another rectangle.
 * @param rect
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {*}
 */
export function clamp4(rect,x,y,width,height){
    const xr = rect[0];
    const yr = rect[1];
    const wr = rect[2];
    const hr = rect[3];

    if(wr >= width){
        rect[0] = xr;
    } else {
        rect[0] = Math.max(x,Math.min(xr,x + width - wr));
    }
    if(hr >= height){
        rect[1] = yr;
    } else {
        rect[1] = Math.max(y,Math.min(yr,y + height - hr));
    }
    return rect;
}

/**
 * Returns a clamped copy of the rectangle.
 * @param recta
 * @param rectb
 */
export function clamped(recta,rectb){
    return clamp(copy(recta),rectb);
}

/**
 * Returns a clamped copy of the rectangle.
 * @param rect
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {*}
 */
export function clamped4(rect,x,y,width,height){
    return clamp4(copy(rect),x,y,width,height);
}

export function clampPoint(rect,point){
    point[0] = Math.max(rect[0],Math.min(point[0],rect[0] + rect[2]));
    point[1] = Math.max(rect[1],Math.min(point[1],rect[1] + rect[3]));
    return point;
}

export function clampedPoint(rect,point){
    return clampPoint(rect,point.slice(0));
}

/**
 * Fits a rectangle vertically into another rectangle preserving its original aspect ratio.
 * @param recta
 * @param rectb
 * @returns {*}
 */
export function fitVertical(recta, rectb){
    recta[2] = rectb[2] * (recta[2] / recta[3]);
    recta[3] = rectb[3];
    return setCenterToRect(recta,rectb);
}

/**
 * Fits a rectangle horizontally into another rectangle preserving its original aspect ratio.
 * @param recta
 * @param rectb
 * @returns {*}
 */
export function fitHorizontal(recta,rectb){
    recta[2] = rectb[2];
    recta[3] = rectb[3] * (recta[3] / recta[2]);
    return setCenterToRect(recta,rectb);
}

export function fit(recta,rectb){
    if(recta[2] >= rectb[2]){

    }

    return recta[2] >= rectb[2] ? fitHorizontal(recta,rectb) : fitVertical(recta,rectb);
}

export function fittedVertical(recta,rectb){
    return fitVertical(copy(recta),rectb);
}

export function fittedHorizontal(recta,rectb){
    return fitHorizontal(copy(recta),rectb);
}

export function fitted(recta,rectb){
    return fit(copy(recta),rectb);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// SCALE
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Scales a rectangle relative to its origin.
 * @param rect
 * @param s
 * @returns {*}
 */
export function scale(rect,s){
    rect[0] *= s;
    rect[1] *= s;
    rect[2] *= s;
    rect[3] *= s;
    return rect;
}

/**
 * Scales a rectangle relative to its origin.
 * @param rect
 * @param sx
 * @param sy
 * @returns {*}
 */
export function scale2(rect,sx,sy){
    rect[0] *= sx;
    rect[1] *= sy;
    rect[2] *= sx;
    rect[3] *= sy;
    return rect;
}

/**
 * Scales a rectangles size.
 * @param rect
 * @param s
 */
export function scaleSize(rect,s){
    return scaleSize2(rect,s,s);
}

/**
 * Scales a rectangles size.
 * @param rect
 * @param s
 */
export function scaleSize1(rect,s){
    return scaleSize2(rect,s);
}

/**
 * Scales a rectangles size.
 * @param rect
 * @param sx
 * @param sy
 * @returns {*}
 */
export function scaleSize2(rect,sx,sy){
    rect[2] *= sx;
    rect[3] *= sy;
    return rect;
}

/*--------------------------------------------------------------------------------------------------------------------*/
// CONTAINS
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Returns true it the rectangle contains the specified point.
 * @param rect
 * @param point
 */
export function containsPoint(rect,point){
    return containsPoint2(rect,point[0],point[1]);
}

/**
 * Returns true if the rectangle contains the specified point.
 * @param rect
 * @param x
 * @param y
 * @returns {boolean}
 */
export function containsPoint2(rect,x,y){
    const rx = rect[0];
    const ry = rect[1];
    return x >= rx && y >= ry && x <= (rx + rect[2]) && y <= (ry + rect[3]);
}

/**
 * Returns true if the rectangle contains the specified rectangle.
 * @param recta
 * @param rectb
 */
export function containsRect(recta,rectb){
    return containsRect4(recta,rectb[0],rectb[1],rectb[2],rectb[3]);
}

/**
 * Returns true if the rectangle contains the specified rectangle.
 * @param rect
 * @param x
 * @param y
 * @param w
 * @param h
 * @returns {boolean}
 */
export function containsRect4(rect,x,y,w,h){
    return (x + w) <= (rect[0] + rect[2]) && (y + h) <= (rect[1] + rect[3]);
}

/**
 * Returns true if the rectangles size is equal or greater than the size specified.
 * @param rect
 * @param size
 */
export function containsSize(rect,size){
    return containsSize2(rect,size[0],size[1]);
}

/**
 * Returns true fit the rectangles size is equal or greater than the size specified.
 * @param rect
 * @param w
 * @param h
 * @returns {boolean}
 */
export function containsSize2(rect,w,h){
    return w <= rect[2] && h <= rect[3];
}

/*--------------------------------------------------------------------------------------------------------------------*/
// INSET
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Insets or extrudes a rectangle.
 * @param rect
 * @param d
 */
export function inset1(rect,d){
    return inset2(rect,d,d);
}

/**
 * Insets or extrudes a rectangle.
 * @param rect
 * @param dx
 * @param dy
 * @returns {*}
 */
export function inset2(rect,dx,dy){
    const w = rect[2] - dx;
    const h = rect[3] - dy;
    const c = getCenter(rect,temp0);

    rect[0] = c[0] - w * 0.5;
    rect[1] = c[1] - h * 0.5;
    rect[2] = w;
    rect[3] = h;

    return rect;
}

/**
 * Insets or extrudes a rectangle.
 * @param rect
 * @param dxy
 * @returns {*}
 */
export function inset(rect,dxy){
    return inset2(rect,dxy[0],dxy[1]);
}

/**
 * Returns an insetted or extruded copy of a rectangle.
 * @param rect
 * @param d
 */
export function insetted1(rect,d){
    return inset1(copy(rect),d);
}

/**
 * Returns an insetted or extruded copy of a rectangle.
 * @param rect
 * @param dx
 * @param dy
 * @returns {*}
 */
export function insetted2(rect,dx,dy){
    return inset2(copy(rect),dx,dy);
}

/**
 * Returns an insetted or extruded copy of a rectangle.
 * @param rect
 * @param dxy
 * @returns {*}
 */
export function insettted(rect,dxy){
    return inset(copy(rect),dxy);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// POINTS
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Returns the center position.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getCenter(rect,out){
    out = out || [0,0];
    out[0] = rect[0] + rect[2] * 0.5;
    out[1] = rect[1] + rect[3] * 0.5;
    return out;
}

/**
 * Returns the top-left position.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getTL(rect,out){
    out = out || [0,0];
    out[0] = rect[0];
    out[1] = rect[1];
    return out;
}

/**
 * Returns the top-right position.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getTR(rect,out){
    out = out || [0,0];
    out[0] = rect[0] + rect[2];
    out[1] = rect[1];
    return out;
}

/**
 * Returns the bottom left position.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getBL(rect,out){
    out = out || [0,0];
    out[0] = rect[0];
    out[1] = rect[1] + rect[3];
    return out;
}

/**
 * Returns the bottom right position.
 * @param rect
 * @param out
 * @returns {*|number[]}
 */
export function getBR(rect,out){
    out = out || [0,0];
    out[0] = rect[0] + rect[2];
    out[1] = rect[1] + rect[3];
    return out;
}

/**
 * Returns the rectangle points.
 * @param rect
 * @param out
 * @returns {*|Array}
 */
export function getPoints(rect,out){
    out = out || [];
    out[0] = getTL(rect,out[0]);
    out[1] = getTR(rect,out[1]);
    out[2] = getBL(rect,out[2]);
    out[3] = getBR(rect,out[3]);
    return out;
}

/*--------------------------------------------------------------------------------------------------------------------*/
// INCLUDE
/*--------------------------------------------------------------------------------------------------------------------*/

export function includePoint(rect,point){
    return includePoint2(rect,point[0],point[1]);
}

export function includePoint2(rect,px,py){
    let tlx = rect[0];
    let tly = rect[1];
    let brx = tlx + rect[2];
    let bry = tly + rect[3];

    tlx = Math.min(tlx,px);
    tly = Math.min(tly,py);
    brx = Math.max(brx,px);
    bry = Math.max(bry,py);

    rect[0] = tlx;
    rect[1] = tly;
    rect[2] = brx - tlx;
    rect[3] = bry - tly;

    return rect;
}

export function includedPoint(rect,point){
    return includePoint(copy(rect),point);
}

export function includedPoint2(rect,px,py){
    return includePoint2(copy(rect),px,py);
}

export function includePoints(rect,points){
    for(let i = 0; i < points.length; i+=2){
        includePoint2(rect,points[i],points[i+1]);
    }
}

export function includeExtends(rect,min,max){
    return includeExtends2(rect,min[0],min[1],max[0],max[1]);
}

export function includeExtends2(rect,minx,miny,maxx,maxy){
    includePoint2(rect,minx,miny);
    includePoint2(rect,maxx,maxy);
    return rect;
}

export function includedExtends(rect,min,max){
    return includeExtends(copy(rect),min,max);
}

export function includedExtends2(rect,min,max){
    return includeExtends2(copy(rect),min,max);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// EDGES
/*--------------------------------------------------------------------------------------------------------------------*/


export function intersection(recta,rectb){

}

/*--------------------------------------------------------------------------------------------------------------------*/
// EQUALITY CHECKS
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Returns true if a rectangle is identical with another rectangle.
 * @param recta
 * @param rectb
 * @returns {boolean}
 */
export function equals(recta,rectb){
    return recta === rectb || (recta[0] === rectb[0] &&
                               recta[1] === rectb[1] &&
                               recta[2] === rectb[2] &&
                               recta[3] === rectb[3]);
}

/**
 * Returns true if a rectangles origin and size is zero.
 * @param rect
 * @returns {boolean}
 */
export function isZero(rect){
    return rect[0] === 0 &&
           rect[1] === 0 &&
           rect[2] === 0 &&
           rect[3] === 0;
}

export function union(recta,rectb){

}