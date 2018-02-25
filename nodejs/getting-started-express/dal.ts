import {delay} from "./helpers";

export async function getAllContacts() {
    await delay(1000);

    // throw new Error("DAL");

    return [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
    ];
}

// export async function getAllContacts() {
//     return delay(1000).then(function(){
//         throw new Error("Ooops");
//
//         return [
//             {id: 1, name: "Ori"},
//             {id: 2, name: "Roni"},
//         ];
//     });
// }

