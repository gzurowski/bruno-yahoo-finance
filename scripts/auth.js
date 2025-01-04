const axios = require('axios');

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0';

/**
 * Fetch cookie from Yahoo Finance.
 * The cookie must be submitted with every API request.
 * 
 * @returns {string} Cookie
 */
const fetchCookie = async () => {
    try {
        const response = await axios.get('https://fc.yahoo.com', {
            validateStatus: status => status === 200 || status === 404
        });
        return response.headers['set-cookie'][0].split(';')[0];
    } catch (error) {
        console.error('Failed to fetch cookie:', error);
        throw error;
    }
}
   
/**
 * Fetch crumb from Yahoo Finance.
 * The crumb must be submitted as a query parameter with every API request.
 * 
 * @param {string} cookie - Cookie
 * @returns {string} Crumb
 */
const fetchCrumb = async (cookie) => {
    try {
        const response = await axios.get('https://query1.finance.yahoo.com/v1/test/getcrumb', {
            headers: {
                'cookie': cookie,
                'user-agent': bru.getVar('user_agent') || DEFAULT_USER_AGENT
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch crumb:', error);
        throw error;
    }
}

module.exports = {
    fetchCookie,
    fetchCrumb
}