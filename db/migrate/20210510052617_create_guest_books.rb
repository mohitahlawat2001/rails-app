class CreateGuestBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :guest_books do |t|
      t.string :name
      t.timestamps
    end
  end
end
