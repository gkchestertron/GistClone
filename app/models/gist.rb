class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title

  validates :owner_id, :title, :presence => true

  belongs_to :owner,
  :class_name => "User",
  :foreign_key => :owner_id

  has_many :favorites

end
