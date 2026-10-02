const baseUrl = (process.env.BASE_URL || 'https://www.kapruka.com').replace(/\/+$/, '');

export const config = {
    baseUrl,
    loginPath: '/shops/customerAccounts/accountLogin.jsp',
};