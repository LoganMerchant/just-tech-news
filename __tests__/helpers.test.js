const { format_date, format_plural, format_url } = require('../utils/helpers');

test('verifies that format_date formats a date as MM/DD/YYYY', () => {
    const date = new Date('2020-10-28 4:54:30');

    expect(format_date(date)).toBe('10/28/2020');
});

test('verifies that format_plural() pluralizes properly', () => {
    expect(format_plural('Tiger', 2)).toBe('tigers');

    expect(format_plural('Lion', 1)).toBe('lion');
});

test('verfies that format_url shortens a url when necessary', () => {
    const url1 = "https://www.testurl.com/test/api/url/432434:abcd";
    const url2 = "http://www.google.com?q=test";

    expect(format_url(url1)).toBe('testurl.com');
    expect(format_url(url2)).toBe('google.com');
});