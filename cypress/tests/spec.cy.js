describe('Temperature Converter', () => {
    beforeEach(() => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
    });

    it('converts Celsius to Celsius correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get(':nth-child(1) > input').type('30');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '30 degree Celsius = 30 degree Celsius');
    });

    it('converts kelvin to kelvin correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('kelvin');
        cy.get(':nth-child(3) > .standardOptionsList').select('kelvin');
        cy.get(':nth-child(1) > input').type('30');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '30 kelvin = 30 kelvin');
    });

    it('converts Celsius to kelvin correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('degree Celsius');
        cy.get(':nth-child(3) > .standardOptionsList').select('kelvin');
        cy.get(':nth-child(1) > input').type('30');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '30 degree Celsius = 303.15 kelvin');
    });

    it('converts kelvin to Celsius correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('kelvin');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Celsius');
        cy.get(':nth-child(1) > input').type('30');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '30 kelvin = -243.15 degree Celsius');
    });

    it('converts 0 kelvin to Celsius correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('kelvin');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Celsius');
        cy.get(':nth-child(1) > input').type('0');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '0 kelvin = -273.15 degree Celsius');
    });

    it('converts 0 Fahrenheit to Fahrenheit correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('degree Fahrenheit');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Fahrenheit');
        cy.get(':nth-child(1) > input').type('0');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '0 degree Fahrenheit = 0 degree Fahrenheit');
    });

    it('converts empty input correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('degree Fahrenheit');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Fahrenheit');
        cy.get(':nth-child(1) > input').type(' ');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '0 degree Fahrenheit = 0 degree Fahrenheit');
    });

    it('converts symbolic input correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('degree Rankine');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Reaumur');
        cy.get(':nth-child(1) > input').type('!@#$%^&*()_+');
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '0 degree Rankine = -218.52 degree Reaumur');
    });

    it('converts javascript code input correctly', () => {
        cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/');
        cy.get('[name="convertFrom"]').select('degree Rankine');
        cy.get(':nth-child(3) > .standardOptionsList').select('degree Reaumur');
        cy.get(':nth-child(1) > input').type("<script>alert1</script>");
        cy.get('#convertBtn').click();
        cy.get('#answer > p').should('have.text', '0 degree Rankine = -218.52 degree Reaumur');
    });

});
