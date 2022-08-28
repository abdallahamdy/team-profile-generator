const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@mail.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('dave@mail.com');
});