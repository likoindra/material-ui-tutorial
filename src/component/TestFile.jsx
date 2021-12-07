import React from 'react'

export default function TestFile() {
  return (
    <form>
      <label for="fname">First name:</label>
      <br/>
      <input type="text" id="fname" name="fname" value="John" />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value="Doe" />
    </form>
  )
}
