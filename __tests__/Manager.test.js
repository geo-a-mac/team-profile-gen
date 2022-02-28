const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Bob', 99, 'bob@company.com', 102);
    
    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
})  

test('returns the Manager name', () => {
    const manager = new Manager('Bob', 99, 'bob@company.com', 102);
    const name = manager.getName();
    expect(name).toBe('Bob');
});

test('return the manager id', () => {
    const manager = new Manager('Bob', 99, 'bob@company.com', 102);
    const id = manager.getId();
    
    expect(id).toEqual(99);
})

test('return the manager e-mail', () => {
    const manager = new Manager('Bob', 99, 'bob@company.com', 102);
    const email = manager.getEmail();

    expect(email).toEqual(expect.any(String));
})

test('return the manager role', () => {
    const manager = new Manager('Bob', 99, 'bob@company.com', 102);
    const role = manager.getRole();

    expect(role).toBe('Manager');
})