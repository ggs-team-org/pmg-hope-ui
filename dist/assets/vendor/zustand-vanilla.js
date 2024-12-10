var zustand = (() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
        for (var name in all)
            __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

    // /input.ts
    var input_exports = {};
    __export(input_exports, {
        createStore: () => createStore
    });

    // http-url:https://unpkg.com/zustand@5.0.2/esm/vanilla.mjs
    var createStoreImpl = (createState) => {
        let state;
        const listeners = /* @__PURE__ */ new Set();
        const setState = (partial, replace) => {
            const nextState = typeof partial === "function" ? partial(state) : partial;
            if (!Object.is(nextState, state)) {
                const previousState = state;
                state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
                listeners.forEach((listener) => listener(state, previousState));
            }
        };
        const getState = () => state;
        const getInitialState = () => initialState;
        const subscribe = (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        };
        const api = { setState, getState, getInitialState, subscribe };
        const initialState = state = createState(setState, getState, api);
        return api;
    };
    var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
    return __toCommonJS(input_exports);
})();
