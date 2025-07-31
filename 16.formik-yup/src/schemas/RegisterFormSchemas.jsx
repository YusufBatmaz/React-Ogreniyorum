import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
    email: yup.string().email('Geçersiz email').required('Email alanı zorunludur'),

    age: yup.number().min(18, '18 yaşından büyük olmalısınız').required('Yaş alanı zorunludur').
    positive('Yaş alanı pozitif olmalıdır').integer('Yaş alanı tam sayı olmalıdır'),

    password: yup.string().min(8, 'Şifre en az 8 karakter olmalıdır').required('Şifre alanı zorunludur'),

    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor').
    required('Şifre alanı zorunludur'),

    terms: yup.boolean().oneOf([true], 'Kullanıcı sözleşmesini kabul etmelisiniz').
    required('Kullanıcı sözleşmesini kabul etmelisiniz'),
});
 