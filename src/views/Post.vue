<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Posts List</h4>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>VatNo.</th>
              <th>Created</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jacob</td>
              <td>53275531</td>
              <td>12 May 2017</td>
              <td><label class="badge badge-danger">Pending</label></td>
              <td>
                <a href="#" class="btn btn-primary btn-sm">View</a>
                <a href="#" class="btn btn-warning btn-sm">Edit</a>
                <a href="#" class="btn btn-danger btn-sm">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Messsy</td>
              <td>53275532</td>
              <td>15 May 2017</td>
              <td><label class="badge badge-warning">In progress</label></td>
              <td>
                <a href="#" class="btn btn-primary btn-sm">View</a>
                <a href="#" class="btn btn-warning btn-sm">Edit</a>
                <a href="#" class="btn btn-danger btn-sm">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
