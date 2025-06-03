import { SignupDTO, LoginDTO, signUpResponseInterface, loginResponseInterface } from './auth.interface';
import { User } from './auth.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AUTH_ERROR_MESSAGES } from '../../utils/constants';

//Signup function
export async function signup(data: SignupDTO): Promise<signUpResponseInterface> {
    const { email, password, firstName, lastName } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error(AUTH_ERROR_MESSAGES.EMAIL_ALREADY_REGISTERED);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, firstName, lastName });
    await user.save();

    return { email: user.email };
}

//Login function
export async function login(data: LoginDTO): Promise<loginResponseInterface> {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error(AUTH_ERROR_MESSAGES.INVALID_EMAIL_OR_PASSWORD);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error(AUTH_ERROR_MESSAGES.INVALID_EMAIL_OR_PASSWORD);
    }

    const JWT_SECRET = process.env.JWT_SECRET || 'thinkwik@123';
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '1d',
    });

    return { email: user.email, firstName: user.firstName, lastName: user.lastName, token };
}
