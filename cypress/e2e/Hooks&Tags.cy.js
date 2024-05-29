// What are cypress hooks ? 
// Cypress Hooks are used to carry out the certain operations prior/post every/each test.Some of the common hooks are as follows
// In Cypress, a hook is a function that allows you to run specific code before or after certain actions or groups of actions in your test suite. Hooks are commonly used to set up preconditions or clean up after tests, ensuring that each test runs in a consistent and isolated environment.

// before − It is executed, once the prior execution of any tests within a described block is carried out.
// after − It is executed, once the post-execution of all the tests within a described block is carried out.
// beforeEach − It is executed prior to the execution of an individual, it blocks within a described block.
// afterEach − It is executed post execution of the individual, it blocks within a described block.

// Laucnch App ---- before
// Close App ---- after
// Login ---- beforeEach
// Logout ---- afterEach

// What are Tags?
// Cypress has 2 tags .only and .skip.

// The .only tag is utilized to execute it block to which it is tagged

// The .skip tag is utilized to exclude it block to which it is tagged.