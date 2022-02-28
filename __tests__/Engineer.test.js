const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toBe('gtBob');
})  

test('returns the engineer name', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    const name = engineer.getName();
    expect(name).toBe('Bob');
});

test('return the engineer id', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    const id = engineer.getId();
    
    expect(id).toEqual(99);
})

test('return the engineer e-mail', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    const email = engineer.getEmail();

    expect(email).toEqual(expect.any(String));
})

test('return the engineer github', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    const gitHub = engineer.getGithub();

    expect(gitHub).toEqual('gtBob');
})

test('return the engineer role', () => {
    const engineer = new Engineer('Bob', 99, 'bob@company.com', 'gtBob');
    const role = engineer.getRole();

    expect(role).toBe('Engineer');
})