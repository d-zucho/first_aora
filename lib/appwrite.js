import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite'

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.dzucho.aora',
  projectId: '663293570035ed3c674c',
  databaseId: '6632960a002be27af6d1',
  userCollectionId: '66329626001777bfafa8',
  videoCollectionId: '663296430022bdea3321',
  storageId: '66329891000302c4537d',
}
// Init your react-native SDK
const client = new Client()

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )

    if (!newAccount) throw Error

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    )

    return newUser
  } catch (error) {
    throw new Error(error)
  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password)

    return session
  } catch (error) {
    throw new Error(error)
  }
}
