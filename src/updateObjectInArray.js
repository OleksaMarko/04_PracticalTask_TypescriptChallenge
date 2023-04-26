var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function coveredTask() {
    const initArray = [
        {
            userId: 1,
            id: 1,
            title: "Hello",
            body: "First obj",
        },
        {
            userId: 1,
            id: 2,
            title: "Hello",
            body: "Second obj",
        },
        {
            userId: 1,
            id: 3,
            title: "Hello",
            body: "Third obj",
        },
        {
            userId: 2,
            id: 1,
            title: "Bonjour",
            body: "First obj",
        },
        {
            userId: 2,
            id: 2,
            title: "Bonjour",
            body: "Second obj",
        },
        {
            userId: 2,
            id: 3,
            title: "Bonjour",
            body: "Third obj",
        },
        {
            userId: 3,
            id: 1,
            title: "Guten Morgen",
            body: "First obj",
        },
        {
            userId: 3,
            id: 2,
            title: "Guten Morgen",
            body: "Second obj",
        },
        {
            userId: 3,
            id: 3,
            title: "Guten Morgen",
            body: "Third obj",
        },
    ];
    function updateObjectInArray(initArray, key, value, patch) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiedArray = [...initArray];
            const result = copiedArray.map((e, i) => {
                if (e[key] === value) {
                    return Object.assign(Object.assign({}, e), patch);
                }
                else {
                    return e;
                }
            });
            return result;
        });
    }
    updateObjectInArray(initArray, "id", 2, {
        body: "UPDATED",
        title: "UPDATED",
    }).then((result) => console.log(result));
}
