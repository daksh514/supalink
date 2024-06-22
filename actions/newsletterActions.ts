"use server"


export async function signUpNewsletter(email: string){
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.MAILERLITE_API_KEY
        },
        body: JSON.stringify({
            email: email,
            groups: [process.env.MAILERLITE_GROUP_ID]
        })
    })
    if (response.status === 200 || response.status === 201) {
        return {
            status: 'success',
            message: "Added to waitlist successfully"
        };
    } else {
        return {
            status: 'error',
            message: "Error adding to waitlist"
        }
    }
}