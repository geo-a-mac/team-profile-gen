const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'Columbia');
    
    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toBe('Columbia');
})  

test('returns the intern name', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'gtBob');
    const name = intern.getName();
    expect(name).toBe('Bob');
});

test('return the intern id', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'gtBob');
    const id = intern.getId();
    
    expect(id).toEqual(99);
})

test('return the intern e-mail', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'gtBob');
    const email = intern.getEmail();

    expect(email).toEqual(expect.any(String));
})

test('return the intern school', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'gtBob');
    const school = intern.getSchool();

    expect(school).toEqual('gtBob');
})

test('return the intern role', () => {
    const intern = new Intern('Bob', 99, 'bob@company.com', 'gtBob');
    const role = intern.getRole();

    expect(role).toBe('Intern');
})