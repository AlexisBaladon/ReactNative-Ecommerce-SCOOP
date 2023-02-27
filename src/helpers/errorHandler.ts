export const humanizeError = (error: Error): string => {
    switch (error.message) {
        case 'INVALID_EMAIL':
            return 'El correo ingresado no es válido.'
        case 'INVALID_PASSWORD':
            return 'La contraseña ingresada no es válida.'
        case 'EMAIL_EXISTS':
            return 'El correo ingresado ya está en uso.'
        case 'EMAIL_NOT_FOUND':
            return 'El correo ingresado no está registrado.'
        default:
            return 'Hubo un error. Por favor, inténtelo de nuevo.'
    }
}