class GuestBook < ApplicationRecord
    has_many :guest_book_entries
end
