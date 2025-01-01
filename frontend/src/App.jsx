/** @format */

import "./App.css";

function App() {
  return (
    <>
      <div className="maincontainer">
        <div className="leftcontainer">
          <div className="formcontainer">
            <form className="w-75 container my-3">
              <div class="mb-3">
                <label for="title" class="form-label">
                  Title
                </label>
                <input type="text" class="form-control" id="title" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Description
                </label>
                <div>
                  <textarea name="description" id="description"></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="rightcontainer"></div>
      </div>
    </>
  );
}

export default App;
