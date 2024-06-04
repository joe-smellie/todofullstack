/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, task: 'Clean kitchen', priority: 'Low', completed: 'no'},
    {id: 2, task: 'Go shopping', priority: 'Medium', completed: 'no'},
    {id: 3, task: 'Walk dog', priority: 'High', completed: 'yes'}
  ]);
};

