import phpSkills from '../../../data/skills/php.json';
import cppSkills from '../../../data/skills/cpp.json';
import nodeSkills from '../../../data/skills/nodejs.json';
import javaSkills from '../../../data/skills/java.json';
import webSkills from '../../../data/skills/web.json';
import jetbrainsSkills from '../../../data/skills/jetbrains.json';
import microsoftSkills from '../../../data/skills/microsoft.json';
import googleSkills from '../../../data/skills/google.json';
import linuxSkills from '../../../data/skills/linux.json';
import databaseSkills from '../../../data/skills/database.json';
import moreSkills from '../../../data/skills/more.json';
import rustSkills from '../../../data/skills/rust.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!params.activeTab || params.activeTab === 'php') {
		return { skills: phpSkills };
	}
	if (params.activeTab === 'cpp') {
		return { skills: cppSkills };
	}
	if (params.activeTab === 'nodejs') {
		return { skills: nodeSkills };
	}
	if (params.activeTab === 'java') {
		return { skills: javaSkills };
	}
	if (params.activeTab === 'web') {
		return { skills: webSkills };
	}
	if (params.activeTab === 'jetbrains') {
		return { skills: jetbrainsSkills };
	}
	if (params.activeTab === 'microsoft') {
		return { skills: microsoftSkills };
	}
	if (params.activeTab === 'google') {
		return { skills: googleSkills };
	}
	if (params.activeTab === 'linux') {
		return { skills: linuxSkills };
	}
	if (params.activeTab === 'database') {
		return { skills: databaseSkills };
	}
	if (params.activeTab === 'more') {
		return { skills: moreSkills };
	}
	if (params.activeTab === 'rust') {
		return { skills: rustSkills };
	}

	return { skills: [] };
}
