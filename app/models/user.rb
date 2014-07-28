class User < ActiveRecord::Base

	has_many :posts
	has_many :comments
	has_secure_password

	def approved?
		!!self.approved
	end

	def admin?
		!!self.admin
	end

end