export const humanizeError = (error: Error): string => {
    switch (error.message.split(' ')[0].replace(/"/g, '')) {
        case 'INVALID_EMAIL':
            return 'El correo ingresado no es válido.'
        case 'INVALID_PASSWORD':
            return 'La contraseña ingresada no es válida.'
        case 'EMAIL_EXISTS':
            return 'El correo ingresado ya está en uso.'
        case 'EMAIL_NOT_FOUND':
            return 'El correo ingresado no está registrado.'
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            return 'Demasiados intentos fallidos. Por favor, inténtelo de nuevo más tarde.'
        case 'USER_DISABLED':
            return 'El usuario ha sido deshabilitado.'
        case 'OPERATION_NOT_ALLOWED':
            return 'La operación no está permitida.'
        case 'WEAK_PASSWORD':
            return 'La contraseña ingresada es muy débil.'
        case 'INVALID_ID_TOKEN':
            return 'La sesión ha expirado. Por favor, inicie sesión de nuevo.'
        case 'USER_NOT_FOUND':
            return 'El usuario no existe.'
        case 'USER_NOT_LOGGED_IN':
            return 'El usuario no ha iniciado sesión.'
        case 'USER_ALREADY_LOGGED_IN':
            return 'El usuario ya ha iniciado sesión.'
        case 'PASSWORDS_DO_NOT_MATCH':
            return 'Las contraseñas no coinciden.'
        default:
            return 'Hubo un error. Por favor, inténtelo de nuevo.'
    }
}