const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@mail.com', 'dave university');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('dave@mail.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('dave university');
});