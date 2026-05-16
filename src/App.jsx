import { Button } from "./index"

function App() {
  return (
    <div className="p-10 flex gap-5">

     <Button>
  Default
</Button>

<Button variant="danger">
  Delete
</Button>

<Button variant="success">
  Success
</Button>

<Button size="lg">
  Large
</Button>

<Button rounded="full">
  Pill Button
</Button>

<Button loading>
  Save
</Button>

<Button disabled>
  Disabled
</Button>

<Button fullWidth>
  Full Width
</Button>
    </div>
  )
}

export default App