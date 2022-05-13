import { db } from '../firebase.config';
import { collection, addDoc } from "firebase/firestore";


export async function submitContactRequest(name, email, comment) {

    console.log("DB: ", db);
    const contactDoc = await addDoc(collection(db, "mail"), {
        to: ['tristanheilman@outlook.com'],
        message: {
            subject: `Contact Request from ${name}`,
            html: `${name} (${email}) - ${comment}`
        }
    });

    console.log("DOC: ", contactDoc);

    return contactDoc;
}
