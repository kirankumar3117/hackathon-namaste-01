import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev-do-not-use-in-prod';
const key = new TextEncoder().encode(JWT_SECRET);

export interface JwtPayload {
  userId: string;
  role: string;
  [key: string]: any;
}

export const signToken = async (payload: JwtPayload, expiresIn = '7d') => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(key);
};

export const verifyToken = async (token: string): Promise<JwtPayload | null> => {
  try {
    const { payload } = await jwtVerify(token, key);
    return payload as JwtPayload;
  } catch (error) {
    return null;
  }
};
