import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../../configs/firebase'

export const loginUser = async (email: string, password: string) => {
  const auth = getAuth(app)
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return {
    email: user.email,
    uid: user.uid,
    token: user.refreshToken,
  }
}

export const registerUser = async (email: string, password: string) => {
  const auth = getAuth(app)
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return {
    email: user.email,
    uid: user.uid,
    token: user.refreshToken,
  }
}
