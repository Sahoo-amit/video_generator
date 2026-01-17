import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Send, Sparkles } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Video_Suggestions } from "@/data/constant"

const Hero = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-20 px-4'>
            <div className="text-center mb-8">
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
                    Learn Smarter with <span className='text-blue-500'>AI Video Courses</span>
                </h1>
                <p className='text-xl text-muted-foreground mt-3 max-w-2xl mx-auto'>
                    Turn Any Topic into a Complete Course with the power of AI and Remotion.
                </p>
            </div>
            <div className="w-full max-w-2xl">
                <InputGroup className="bg-white z-10 border-2 rounded-3xl p-3 shadow-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-300">
                    <InputGroupTextarea
                        data-slot="input-group-control"
                        className="min-h-[100px] w-full resize-none bg-transparent border-none px-4 py-2 text-lg outline-none focus-visible:ring-0 placeholder:text-muted-foreground/50"
                        placeholder="What do you want to learn today? (e.g., 'Modern Web Architecture')"
                    />
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-secondary/40">
                        <div className="flex items-center gap-2">
                            <Select defaultValue="full-course">
                                <SelectTrigger className="w-[160px] h-9 bg-secondary/50 border-none hover:bg-secondary text-xs rounded-xl transition-colors">
                                    <SelectValue placeholder="Course Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full-course">📚 Full Course</SelectItem>
                                    <SelectItem value="quick-explain-video">🎥 Quick Explain</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <InputGroupAddon align="block-end">
                            <InputGroupButton
                                className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all active:scale-90"
                                size="icon"
                                variant="default"
                            >
                                <Send className="h-5 w-5" />
                            </InputGroupButton>
                        </InputGroupAddon>
                    </div>
                </InputGroup>
            </div>
            <div className="flex justify-center items-center gap-3 mt-8 max-w-3xl flex-wrap">
                <p className="w-full text-center text-sm text-muted-foreground mb-1 flex items-center justify-center gap-2">
                    <Sparkles className="h-3 w-3" /> Try a popular topic
                </p>
                {Video_Suggestions.map((suggestion, index) => (
                    <button
                        key={index}
                        className="border z-10 bg-white hover:bg-secondary/50 border-secondary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium transition-all hover:scale-105 active:scale-95"
                    >
                        {suggestion.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Hero