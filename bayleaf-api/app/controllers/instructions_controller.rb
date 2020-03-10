class InstructionsController < ApplicationController

	def index
		instructions = Instruction.all
		render json: InstructionSerializer.new(instructions)
	end

private

	def instruction_params
		params.require(:instruction).permit(:step_num, :content, :recipe_id)
	end

end
