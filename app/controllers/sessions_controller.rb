class SessionsController < ApplicationController

	skip_before_action :authentication_required 
	def index
	end

	def new
	end

	def create
		@user = User.find_by(:email => params[:email])
		if @user && @user.authenticate(params[:password])
			session[:id] = @user.id
			redirect_to posts_path
		else
			flash.now[:notice] = "Fuc this"
			redirect_to root_path
		end
	end

	def destroy
		reset_session
		redirect_to root_path
	end
end
