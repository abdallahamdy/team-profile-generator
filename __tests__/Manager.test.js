const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@mail.com');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('dave@mail.com');
    expect(manager.getRole()).toBe('Manager');
});