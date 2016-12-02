require 'test_helper'

class UserControllerTest < ActionController::TestCase
  test "should get username:string" do
    get :username:string
    assert_response :success
  end

  test "should get password_digest:string" do
    get :password_digest:string
    assert_response :success
  end

  test "should get session_token:string" do
    get :session_token:string
    assert_response :success
  end

end
