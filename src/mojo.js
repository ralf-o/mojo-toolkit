import Objects from './module/Objects';
import Strings from './module/Strings';
import Arrays from './module/Arrays';
import Seq from './module/Seq';
import Control from './module/Control';


/**
 * @class SomeTest
 */

const module = { Objects, Strings, Arrays, Seq, Control };

export default module;

if (typeof define === 'function' && define.amd) {
    define(() => module);
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = module;
}

if (typeof window === 'object' && window) {
    if (!window.mojo) {
        window.mojo = module;
    }
}
