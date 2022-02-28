const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Bob', 99 ,'bob@company.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('returns the Employee name', () => {
    const employee = new Employee('Bob', 99, 'bob@company.com');
    const name = employee.getName();
    expect(name).toBe('Bob');
});

test('return the Employee id', () => {
    const employee = new Employee('Bob', 99, 'bob@company.com');
    const id = employee.getId();
    
    expect(id).toEqual(99);
})

test('return the Employee e-mail', () => {
    const employee = new Employee('Bob', 99, 'bob@company.com');
    const email = employee.getEmail();

    expect(email).toEqual(expect.any(String));
})

test('return the employee role', () => {
    const employee = new Employee('Bob', 99, 'bob@company.com');
    const role = employee.getRole();

    expect(role).toBe('Employee');
})