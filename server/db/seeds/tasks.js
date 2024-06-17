/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, taskDetails: 'Clean kitchen', priority: 'Low', completed: 'false'},
    {id: 2, taskDetails: 'Go shopping', priority: 'Medium', completed: 'false'},
    {id: 3, taskDetails: 'Walk dog', priority: 'High', completed: 'true'}
  ]);
};

