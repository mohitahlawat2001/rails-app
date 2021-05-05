class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|

      t.string :name
      t.string :image_url
      t.string :sound
    end
  end
end
