import TaskForm from "./TaskForm"
import ListTasks from "./ListTasks"



function App() {
  return (
    <>
      <header className="header">
        <h1 id="newTask">Tasks</h1>
        <TaskForm />
      </header>
      <section className="main">
        <ListTasks />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
