// WhIde.cpp : 定义应用程序的入口点。
//

#include "stdafx.h"
#include "sciter-x.h"
#include "sciter-x-window.hpp"

class frame : public sciter::window {
public:
	frame() : window(SW_TITLEBAR | SW_RESIZEABLE | SW_CONTROLS | SW_MAIN | SW_ENABLE_DEBUG) {}

	SOM_PASSPORT_BEGIN(frame)
		SOM_FUNCS(
			SOM_FUNC(nativeMessage)
		)
	SOM_PASSPORT_END

		// function expsed to script:
		sciter::string  nativeMessage() { return WSTR("Hello C++ World"); }
};

#include "resources.cpp"

int uimain(std::function<int()> run) {

	//sciter::debug_output_console console; - uncomment it if you will need console window

	sciter::archive::instance().open(aux::elements_of(resources)); // bind resources[] (defined in "resources.cpp") with the archive

	frame* pwin = new frame();

	// note: this:://app URL is dedicated to the sciter::archive content associated with the application
	pwin->load(WSTR("this://app/main.htm"));
	pwin->expand();

	return run();
}

