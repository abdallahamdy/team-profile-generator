const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@mail.com', 'gitdave');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('dave@mail.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('gitdave');
});