const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.productCreation = functions.firestore.document(
                            'products/{productId}'
                            ).onCreate(doc =>{
                                    const product= doc.data
                                    const notification ={
                                        content: 'Added new product',
                                        user: product.addedByFirstName+' '+ product.addedByLastName,
                                        time: admin.firestore.FieldValue.serverTimestamp()
                                    }
                                    return createNotification(notification)
                                })

const createNotification =(notification =>{
        return admin.firestore().collection('notifications').add(notification)
        .then(doc => console.log('notification added', doc))
}) 

exports.userRegistered = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users').doc(user.uid)
            .get().then(doc =>{
                const userData=doc.data
                const notification = {
                    content: 'New User Added',
                    user: userData.firstName+ " "+ userData.lastName,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })
})