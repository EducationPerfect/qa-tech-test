describe('Todo list test', () => {
    beforeEach(() => {
        const todoItems = [
            {"title": "Item 1", "completed": false}, 
            {"title": "Item 2", "completed": true}, 
            {"title": "Item 3", "completed": false}];

        cy.loadData(todoItems);
        cy.visit('http://127.0.0.1:8080/');
    });

    it('should enter a new todo', () => {
        cy.get('.new-todo').type('fake@email.com{enter}');
        cy.get('.todo').should('contain.text', 'fake@email.com');
    });

    it('should filter items', () => {
        // "Active" should only display active items
        cy.contains("Active").click();
        cy.get("li.todo").each((todo) => {
            cy.wrap(todo).should("not.have.class", "completed")
        });

        // "Completed" should only display completed items
        cy.contains("Completed").click();
        cy.get("li.todo").each((todo) => {
            cy.wrap(todo).should("have.class", "completed")
        });
    });

    it('should mark a todo as completed', () => {
        // Mark "Item 3" as completed
        cy.contains("Item 3").parent().find('input[type=checkbox]').check().should('be.checked');
        // Verify the element is checked
        cy.contains('Item 3').parents('li').should('have.class', 'completed');
    });

    it('should toggle all items', () => {
        // ".toggle-all" should mark all items as completed
        cy.get('[type="checkbox"]').check().should('be.checked');
        // and unmark all items when clicked a second time
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
    });

    it('should display correct remaining items', () => {
        // "x items left" should update correctly
        cy.contains("items left").should('contain.text', '2 items left');
    });

    it('should clear completed items', () => {
        // "Clear completed" removes completed items
        cy.contains("Clear completed").click();
        // "verify item 2 is not visible anymore
        cy.get("li.todo").each((todo) => {
            cy.wrap(todo).should("not.contain.text", "Item 2")
        });
    });

    it('should delete an item', () => {
        // Delete an item whether it is completed or not
        cy.contains("Item 1").parent().find('.destroy').click({force: true})
        // Verify first item is deleted
        cy.get("li.todo").each((todo) => {
            cy.wrap(todo).should("not.contain.text", "Item 1")
        });
     });
})
