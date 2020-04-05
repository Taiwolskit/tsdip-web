
const Profile = () => (
  <div id='manage-profile' className='manage-profile'>
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="profile-email">Email</label>
          <input type="email" className="form-control" id="profile-email" placeholder="Email" />
        </div>

        <div className="form-group col-md-6">
          <label for="profile-password">Password</label>
          <input type="password" className="form-control" id="profile-password" placeholder="Password" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>

      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
);

export default Profile;
