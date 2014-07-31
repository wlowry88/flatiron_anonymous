class AddAdminToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :admin, :boolean, :value=>true
  end
end
