// 3D sahne için ek yükleyiciler (three.js r159 jsm, MIT). "three" adı import map ile three-shim.js'e yönlenir.
import { GLTFLoader } from '../vendor/three/jsm/GLTFLoader.js';
import { FBXLoader } from '../vendor/three/jsm/FBXLoader.js';
import { RGBELoader } from '../vendor/three/jsm/RGBELoader.js';
import * as SkeletonUtils from '../vendor/three/jsm/SkeletonUtils.js';
window.ZY3 = { GLTFLoader, FBXLoader, RGBELoader, SkeletonUtils };
window.dispatchEvent(new Event('zy3-hazir'));
